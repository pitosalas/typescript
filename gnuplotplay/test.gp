# set terminal png
# set output 'test.png'

 set terminal qt

# set size 1.0, 0.6
# set terminal postscript portrait enhanced mono dashed lw 1 "Helvetica" 14 
# set output "my-plot.ps"

set xlabel "Survey #"
set ylabel "Self Assessed Mastery"
set xrange [0:5]
set xtics font ", 20"
set ytics font ", 20"
plot "data3" using 1:2 with lines title "Source Code Control (Git)", "" using 1:3 with lines title "Object oriented design"