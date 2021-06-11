package com.example.myapplication;

import java.io.File;
import java.io.FileOutputStream;


import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.text.TextUtils;
import android.widget.Toast;

public class LoadingActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.loading);		
		//�߳�Runnable
		Runnable runnable = new Runnable(){ 

			@Override
			public void run() {  
				// TODO Auto-generated method stub
				//// java�ļ��У�activity����ת
				Intent intent = new Intent(LoadingActivity.this,MainActivity.class);
				startActivity(intent);
				finish();
			}	
		};

		////Handler�����߳�
		Handler handler = new Handler();
		handler.postDelayed(runnable, 1500);
	}
}
