USE wouldyourather_db;

--orig--
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("Utensil Drama", "Only be able to use a fork (no spoon)", "Only be able to use a spoon (no fork)", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("Good Clothing Options", "Wear a wedding dress/tuxedo every single day", "Wear a bathing suit every single day", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("Land vs. Air", "Have all dogs try to attack you when they see you", "All birds try to attack you when they see you", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("me_irl", "Have to fart loudly every time you have a serious conversation", "Have to burp after every kiss", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("Super Powers", "Be able to teleport anywhere", "Be able to read minds", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("me_irl", "Have one nipple", "Have two belly buttons", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("Time Capsules", "Have a conversation with your past self", "Have a conversation with your future self", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("Steve Irwin's got nothing on this", "Fight 100 duck sized horses", "Fight one horse sized duck", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("Dietary Restrictions", "Swallow broken glass", "Swallow rusty nails", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- //additions//--
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("Money or Time", "Have more money", "Have more time", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("Temperature", "Be too hot", "Be too cold", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("Alone-at-last", "Live Forever", "Die right now", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("Midget-or-Giant", "Be 4 ft 5 in", "Be 7 ft 7 in", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions
    (title, left_choice, right_choice, createdAt, updatedAt)
VALUES
    ("Salty or Sweet", "Have spaghetti hair that grows back every night", "Sweat maple syrup", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
--additions--
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);




--orig--
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO answers
    (choice, questionId, createdAt, updatedAt)
VALUES
    (1, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);