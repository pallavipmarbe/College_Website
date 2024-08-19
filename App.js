#include<stdio.h>
typedef struct 
{
    int cf;
    int px;
} POLY;
void print_poly(POLY p[], int n)
{
    int i;
    for(i=0;i<n;i++){
        if(p[i]