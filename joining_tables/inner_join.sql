SELECT students.name as student_name, email, cohorts.name as cohort_name
FROM students INNER JOIN cohorts ON cohorts.id = cohort_id;