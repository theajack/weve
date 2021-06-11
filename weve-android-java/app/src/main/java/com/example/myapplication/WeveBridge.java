package com.example.myapplication;


import android.os.Handler;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

public class WeveBridge {
    private WebView webview = null;
    private MainActivity activity;
    public WeveBridge(MainActivity activity, WebView webview) {
        //     this.webView = (WebView)activity.findViewById(R.id.webViewIndex);
        //     this.handler = handler;
        this.activity = activity;
        this.webview = webview;
    }
    @JavascriptInterface
    public String postMessage(String method, String str){
        String result="";
        return "{\"a\": 1}";
    }

    public void callJsFunc(String name, String data){
        this.webview.loadUrl("javascript:"+name+"('" + data + "')");
    }

}