module.exports = {
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },

    // greater than or equal to
    ge: (a,b,c,d,e,f,g,h,i,j,k,l,m,n) => {
      a = parseInt(a);
      b = parseInt(b);
      c = parseInt(c);
      d = parseInt(d);
      e = parseInt(e);
      f = parseInt(f);
      g = parseInt(g);
      h = parseInt(h);
      i = parseInt(i);
      j = parseInt(j);
      k = parseInt(k);
      l = parseInt(l);
      m = parseInt(m);
      n = parseInt(n);
      
      if (a >= b && c >= d && e >= f && g >= h && i >= j && k >= l && m >= n) {
        return ('<span style="color: green">Yes!</span>');
      }
      else {
        return ('<span style="color: red">No.</span>');
      }
    },
  };