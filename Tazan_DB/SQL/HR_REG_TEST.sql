create table REG_TEST
(
    TEXT VARCHAR2(10)
)
/

INSERT INTO HR.REG_TEST (TEXT) VALUES ('ABC123');
INSERT INTO HR.REG_TEST (TEXT) VALUES ('ABC 123');
INSERT INTO HR.REG_TEST (TEXT) VALUES ('abc 123');
INSERT INTO HR.REG_TEST (TEXT) VALUES ('a1b2c3');
INSERT INTO HR.REG_TEST (TEXT) VALUES ('aabbcc123');
INSERT INTO HR.REG_TEST (TEXT) VALUES ('?/!@#$*&');
INSERT INTO HR.REG_TEST (TEXT) VALUES ('\~*().,');
INSERT INTO HR.REG_TEST (TEXT) VALUES ('123123');
INSERT INTO HR.REG_TEST (TEXT) VALUES ('123abc');