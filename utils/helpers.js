module.exports = {
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },

    // greater than or equal to
    ge: (a,b) => {
      a = parseInt(a);
      b = parseInt(b);
      
      if (a >= b) {
        return ('<span style="color: green">Yes!</span>');
      }
      else {
        return ('<span style="color: red">No.</span>');
      }
    },
  };