module.exports = {
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },

    // determines is the student is ready to graduate
    grad: (a,b,c,d,e,f,g,h,i,j,k,l,m,n) => {
      a = parseFloat(a);
      b = parseFloat(b);
      c = parseFloat(c);
      d = parseFloat(d);
      e = parseFloat(e);
      f = parseFloat(f);
      g = parseFloat(g);
      h = parseFloat(h);
      i = parseFloat(i);
      j = parseFloat(j);
      k = parseFloat(k);
      l = parseFloat(l);
      m = parseFloat(m);
      n = parseFloat(n);
      
      if (a >= b && c >= d && e >= f && g >= h && i >= j && k >= l && m >= n) {
        return ('<span style="color: green">Yes!</span>');
      }
      else {
        return ('<span style="color: red">No.</span>');
      }
    },

// greater than or equal to
    ge: (a,b) => {
      a = parseFloat(a);
      b = parseFloat(b);
      
      if (a < b) {
        return ('<span style="color: red">');
      }
      else {
        return('<span>');
      }
    },
  };