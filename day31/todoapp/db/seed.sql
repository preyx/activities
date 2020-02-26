USE todo_db;

INSERT INTO users (username) 
VALUES ('johndoe'), 
('janedoe'), 
('jackdoe');

INSERT INTO items (item, isDone, userid) 
VALUES ('take out trash', false, 1), 
('pick up dry cleaning', false, 1), 
('cook dinner', true, 1), 
('make bed', true, 2), 
('walk the dog', true, 2),
('do laundry', false, 2), 
('buy groceries', true, 3), 
('workout', false, 3), 
('pick up mail', false, 3);