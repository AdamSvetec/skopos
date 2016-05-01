 Morris.Area({
    element: 'area-example',
    data: [
      { y: '2010', a: 16,  b: 9, c: 50, d: 25  },
      { y: '2011', a: 72,  b: 2, c: 15, d: 11   },
      { y: '2012', a: 29,  b: 7, c: 44, d: 20   },
      { y: '2013', a: 45,  b: 7, c: 32, d: 15   },
      { y: '2014', a: 20,  b: 20, c: 49, d: 11   },
      { y: '2015', a: 31,   b: 14,  c: 47, d: 8 },
      { y: '2015', a: 34, b: 18,    c: 39, d: 9  },
      { y: '2015', a: 30, b: 15,    c: 47, d: 8  },
    ],
    xkey: 'y',
    ykeys: ['d', 'c','b', 'a'],
    labels: ['Pear', 'Sigma', 'Mastermind', 'tiniTech']
  });
  
  Morris.Line({
        element: 'line-example',
        data: [
          {Qtr: '3', Sales: 131300},
          {Qtr: '4', Sales: 1787000},
          {Qtr: '5', Sales: 3591600},
          {Qtr: '6', Sales: 5039950},
          {Qtr: '7', Sales: 11327640},
          {Qtr: '8', Sales: 12636011},
          {Qtr: '9', Sales: 13173377},
          {Qtr: '10', Sales: 16491350},
          
        ],
        xkey: 'Qtr',
        ykeys: ['Sales'],
        labels: ['Sales']
      });
      
      Morris.Donut({
        element: 'donut-example',
        data: [
         {label: "Brain Surgery", value: 20},
         {label: "Heart Surgery", value: 40},
         {label: "Plastic Surgery", value: 40}
        ]
      });
      
      Morris.Bar({
         element: 'bar-example',
         data: [
            {y: 'Fresh', a: 56},
            {y: 'Soph', a: 60},
            {y: 'Junior', a: 65},
            {y: 'Senior', a: 70},
            {y: 'Fifth', a: 80},
            {y: 'Sixth', a: 90}
         ],
         xkey: 'y',
         ykeys: ['a'],
         labels: ['Success Rate']
      });