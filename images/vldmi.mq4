//+------------------------------------------------------------------+
//|                                                  mtf 1x3 5x2.mq4 |
//|                        Copyright 2019, MetaQuotes Software Corp. |
//|                                             https://www.mql5.com |
//+------------------------------------------------------------------+
#property copyright "Copyright 2019, MetaQuotes Software Corp."
#property link      "https://www.mql5.com"
#property version   "1.00"
#property strict
#property indicator_chart_window
#property indicator_buffers 2

#property indicator_color1 Red
#property indicator_width1 2
#property indicator_color2 Red
#property indicator_width2 2

double Arrow_Up[];
double Arrow_Down[];
double Pips=0;

//kansu
double AdjustPoint(string Currency)
 {
double Calculated_Point=0;
int Symbol_Digits=(int)MarketInfo(Symbol(),MODE_DIGITS);

if(Symbol_Digits==2||Symbol_Digits==3)
 {
 Calculated_Point=0.01;
 }
 else if(Symbol_Digits==4||Symbol_Digits==5)
 {
 Calculated_Point=0.0001;
 }
return(Calculated_Point);
}

//+------------------------------------------------------------------+
//| Custom indicator initialization function                         |
//+------------------------------------------------------------------+
int OnInit()
  {
//--- indicator buffers mapping
   IndicatorBuffers(2);
   
   SetIndexBuffer(0,Arrow_Up);
   SetIndexBuffer(1,Arrow_Down);
   
   SetIndexLabel(0,NULL);
   SetIndexLabel(1,NULL);
   
   SetIndexStyle(0,DRAW_ARROW);
   SetIndexArrow(0,233);
   SetIndexStyle(1,DRAW_ARROW);
   SetIndexArrow(1,234);
   
   Pips=AdjustPoint(Symbol());
//---
   return(INIT_SUCCEEDED);
  }
//+------------------------------------------------------------------+
//| Custom indicator iteration function                              |
//+------------------------------------------------------------------+
int OnCalculate(const int rates_total,
                const int prev_calculated,
                const datetime &time[],
                const double &open[],
                const double &high[],
                const double &low[],
                const double &close[],
                const long &tick_volume[],
                const long &volume[],
                const int &spread[])
  {
//---
   
   static int BarsBefore=0;
   int BarsNow=Bars;
   int BarsCheck=BarsNow-BarsBefore;
   int limit=Bars-IndicatorCounted();
   for(int i=0;i<=limit-1;i++)
   {
   Arrow_Up[i]=EMPTY_VALUE;
   if(iOpen(NULL,1,i)>iClose(NULL,1,i)&&(iMA(NULL,1,20,0,MODE_SMA,PRICE_HIGH,i)-iMA(NULL,1,20,0,MODE_SMA,PRICE_LOW,i))*2<iOpen(NULL,1,i)-iClose(NULL,1,i)
   &&iOpen(NULL,5,i)>iClose(NULL,5,i)&&(iMA(NULL,5,20,0,MODE_SMA,PRICE_HIGH,i)-iMA(NULL,5,20,0,MODE_SMA,PRICE_LOW,i))*2<iOpen(NULL,5,i)-iClose(NULL,5,i)
   &&BarsCheck==1)
   {
   Arrow_Up[i]=Low[i]-1*Pips;
   }
   Arrow_Down[i]=EMPTY_VALUE;
   if(iOpen(NULL,1,i)<iClose(NULL,1,i)&&(iMA(NULL,1,20,0,MODE_SMA,PRICE_HIGH,i)-iMA(NULL,1,20,0,MODE_SMA,PRICE_LOW,i))*2<iClose(NULL,1,i)-iOpen(NULL,1,i)
   &&iOpen(NULL,5,i)<iClose(NULL,5,i)&&(iMA(NULL,5,20,0,MODE_SMA,PRICE_HIGH,i)-iMA(NULL,5,20,0,MODE_SMA,PRICE_LOW,i))*2<iClose(NULL,5,i)-iOpen(NULL,5,i)
   &&BarsCheck==1)
   {
   Arrow_Down[i]=High[i]+1*Pips;
   }
   }
   BarsBefore=BarsNow;
//--- return value of prev_calculated for next call
   return(rates_total);
  }
//+------------------------------------------------------------------+
   