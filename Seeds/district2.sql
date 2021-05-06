USE gradright_db;

CREATE TABLE district_2 (

  student_name VARCHAR(30) NOT NULL,

  student_id INTEGER(12),

  school_name VARCHAR(30) NOT NULL,

  current_grade INTEGER(2),
  
  math_credits INTEGER(2),

  has_math_credits BOOLEAN NOT NULL,

  has_fine_arts_credit BOOLEAN NOT NULL,


);