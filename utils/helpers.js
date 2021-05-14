module.exports = {
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },

    // greater than or equal to
    ge: (a,b) => {
	    return (a >= b);
    },
  };