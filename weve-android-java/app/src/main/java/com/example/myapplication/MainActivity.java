package com.example.myapplication;

import android.os.Bundle;


import android.os.Handler;
import android.app.Activity;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {

    private WebView webview;
    //private ContactService contactService;
    public Handler handler=new Handler();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        webview = (WebView) findViewById(R.id.webViewIndex);

        webview.loadUrl("file:///android_asset/index.html");

        webview.getSettings().setJavaScriptEnabled(true);
        webview.setWebViewClient(new WebViewClient(){
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                view.loadUrl(url);//��������ӵ�ʱ��������ԭ�������ϼ���URL
                return true;
            }
        });

        /**
         * ����һ��js�����ӿڣ�����html�����ļ��е�javascript���������̨java����ֱ�ӽ�������
         * "contact"Ϊ���ö���ȡ�ñ��� ��Ӧandroid.html�е�contact
         */
        webview.addJavascriptInterface(new WeveBridge(this, webview), "WeveBridge");
//        webViewIndex.setWebContentsDebuggingEnabled(true);
    }



}
