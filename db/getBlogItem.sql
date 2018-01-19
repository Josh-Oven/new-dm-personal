-- select * from blogs
-- join authors on blogs.blogauthor = authors.blogauthor

-- create view joined as
-- select * from blogs
-- join authors on blogs.blogauthor = authors.blogauthor

select * from blogs
where blogid = $1
