package id.arkana.game;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.text.InputType;
import android.util.Base64;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.EditText;

/**
 * Pembungkus tipis: membuka klien game dari server dalam WebView layar penuh.
 * Alamat server bawaan disimpan tersamar dan tidak pernah ditampilkan ke pemain.
 */
public class MainActivity extends Activity {
    private static final byte[] KEY = "arkana-senja".getBytes();
    private WebView web;
    private SharedPreferences prefs;
    private boolean dialogOpen;

    private String builtIn() {
        byte[] d = Base64.decode(getString(R.string.server_enc), Base64.DEFAULT);
        for (int i = 0; i < d.length; i++) d[i] ^= KEY[i % KEY.length];
        return new String(d);
    }

    /** Alamat yang dipakai: alamat pilihan pemain bila pernah diganti, selain itu alamat bawaan. */
    private String serverUrl() {
        String custom = prefs.getString("custom", "");
        return custom.isEmpty() ? builtIn() : custom;
    }

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        prefs = getSharedPreferences("arkana", MODE_PRIVATE);
        prefs.edit().remove("server").apply(); // versi lama menyimpan alamat bawaan sebagai teks biasa
        WebView.setWebContentsDebuggingEnabled(false);
        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#120A1C"));
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest r) {
                return false; // tetap di dalam aplikasi
            }
            @Override
            public void onReceivedError(WebView v, WebResourceRequest r, WebResourceError e) {
                if (r.isForMainFrame()) offline();
            }
        });
        setContentView(web);
        String url = serverUrl();
        if (url.isEmpty()) askServer(); else web.loadUrl(url);
    }

    private void offline() {
        if (dialogOpen || isFinishing()) return;
        dialogOpen = true;
        new AlertDialog.Builder(this).setTitle("Arkana")
            .setMessage("Tidak bisa terhubung ke server game. Periksa koneksi internet, lalu coba lagi.")
            .setCancelable(false)
            .setPositiveButton("Coba lagi", (d, w) -> { dialogOpen = false; web.loadUrl(serverUrl()); })
            .setNegativeButton("Keluar", (d, w) -> finish())
            .show();
    }

    private void askServer() {
        if (dialogOpen || isFinishing()) return;
        dialogOpen = true;
        final EditText in = new EditText(this);
        in.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_URI);
        in.setHint("Kosongkan untuk server bawaan");
        in.setText(prefs.getString("custom", ""));
        new AlertDialog.Builder(this).setTitle("Ganti server").setView(in).setCancelable(false)
            .setPositiveButton("Sambungkan", (d, w) -> {
                dialogOpen = false;
                String u = in.getText().toString().trim();
                if (!u.isEmpty() && !u.contains("://")) u = "https://" + u;
                if (!u.isEmpty() && Uri.parse(u).getHost() == null) { askServer(); return; }
                prefs.edit().putString("custom", u).apply();
                web.loadUrl(serverUrl());
            })
            .setNegativeButton("Batal", (d, w) -> dialogOpen = false)
            .show();
    }

    private void immersive() {
        getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
            | View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
    }

    @Override public void onWindowFocusChanged(boolean f) { super.onWindowFocusChanged(f); if (f) immersive(); }
    @Override protected void onPause() { super.onPause(); web.onPause(); }
    @Override protected void onResume() { super.onResume(); web.onResume(); immersive(); }
    @Override protected void onDestroy() { web.destroy(); super.onDestroy(); }

    @Override
    public void onBackPressed() {
        new AlertDialog.Builder(this).setMessage("Keluar dari Arkana?")
            .setPositiveButton("Keluar", (d, w) -> finish())
            .setNeutralButton("Ganti server", (d, w) -> askServer())
            .setNegativeButton("Batal", null).show();
    }
}
