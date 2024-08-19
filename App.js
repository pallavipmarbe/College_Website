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
        if(p[i].cf!=0)
        {
            if(i>0 && p[i].cf>0)
            printf("+");
        printf("%d",p[i].cf);
        }
        if(p[i].px!=0)
        printf("x^%d", p[i].px);
    }
    printf("\n");
}