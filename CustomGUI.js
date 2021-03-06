var black = android.graphics.Color.BLACK;
var white = android.graphics.Color.WHITE;
var magenta = android.graphics.Color.MAGENTA;
var red = android.graphics.Color.RED;
var blue = android.graphics.Color.BLUE;
var yellow = android.graphics.Color.YELLOW;
var green = android.graphics.Color.GREEN;
var cyan = android.graphics.Color.CYAN;
var trans = android.graphics.Color.TRANSPARENT;
var dodgerblue = android.graphics.Color.parseColor("#1E90FF");
var deeppink = android.graphics.Color.parseColor("#FF1493");
var teal = android.graphics.Color.parseColor("#008080");
var crimson = android.graphics.Color.parseColor("#DC143C");
var TV = android.widget.TextView;
var Button = android.widget.Button;
var PW = android.widget.PopupWindow;
var LL = new android.widget.LinearLayout;
var Runnable = java.lang.Runnable;
var OCL = android.view.View.OnClickListener;
var CD = android.graphics.drawable.ColorDrawable;
var RL = android.widget.RelativeLayout;
var SV = android.widget.ScrollView;
var GUI;
var menu;
var exitUI;
function dip2px(dips){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function newLevel(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new LL(ctx);
            layout.setOrientation(1);
            var menuBtn = new Button(ctx);
            menuBtn.setText("Menu");
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    mainMenu();
                }
            }));
            layout.addView(menuBtn);
            GUI = new android.widget.PopupWindow(layout, RL.LayoutParams.WRAP_CONTENT, RL.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
        }catch(err){
            print("An error occured: " + err);
        }
    }}));
}
function mainMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var menuLayout = new LL(ctx);
            var menuScroll = new SV(ctx);
            var menuLayout1 = new LL(ctx);
            menuLayout.setOrientation(1);
            menuLayout1.setOrientation(1);
            menuScroll.addView(menuLayout);
            menuLayout1.addView(menuScroll);

            //Add Buttons Here

            menu = new PW(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("An error occured: " + error);
        }
    }}));
}
function exit(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var xLayout = new LL(ctx);
            var xButton = new Button(ctx);
            xButton.setText("x");
            xButton.setTextColor(android.graphics.Color.WHITE);
            xButton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    exitUI.dismiss();
                    menu.dismiss();
                }
            }));
            xLayout.addView(xButton);
            exitUI = new PW(xLayout, dip2px(40), dip2px(40));
            exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            exitUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(exception){
            print(exception);
        }
    }}));
}
