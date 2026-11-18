package id.arkana.game;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.text.InputType;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.EditText;

/** Pembungkus tipis: membuka klien game dari server dalam WebView layar penuh. */
public class MainActivity extends Activity {
    private WebView web;
    private SharedPreferences prefs;
    private boolean dialogOpen;

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        prefs = getSharedPreferences("arkana", MODE_PRIVATE);
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
                if (r.isForMainFrame()) askServer("Server tidak terjangkau. Periksa alamat dan koneksi internet.");
            }
        });
        setContentView(web);
        String url = prefs.getString("server", getString(R.string.server_url));
        if (url.isEmpty()) askServer("Masukkan alamat server game."); else web.loadUrl(url);
    }

    private void askServer(String msg) {
        if (dialogOpen || isFinishing()) return;
        dialogOpen = true;
        final EditText in = new EditText(this);
        in.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_URI);
        in.setHint("http://alamat-server:8080");
        in.setText(prefs.getString("server", getString(R.string.server_url)));
        new AlertDialog.Builder(this).setTitle("Arkana").setMessage(msg).setView(in).setCancelable(false)
            .setPositiveButton("Sambungkan", (d, w) -> {
                dialogOpen = false;
                String u = in.getText().toString().trim();
                if (!u.isEmpty() && !u.contains("://")) u = "http://" + u;
                if (u.isEmpty() || Uri.parse(u).getHost() == null) { askServer("Alamat tidak valid."); return; }
                prefs.edit().putString("server", u).apply();
                web.loadUrl(u);
            })
            .setNegativeButton("Keluar", (d, w) -> finish())
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
            .setNeutralButton("Ganti server", (d, w) -> askServer("Masukkan alamat server game."))
            .setNegativeButton("Batal", null).show();
    }
}
