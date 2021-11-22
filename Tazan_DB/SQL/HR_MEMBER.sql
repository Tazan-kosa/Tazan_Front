create table MEMBER
(
    NO         NUMBER(4)    not null,
    NAME       VARCHAR2(15) not null,
    JUMIN      CHAR(13)     not null
        primary key,
    PASSWD     VARCHAR2(10) not null,
    ID         VARCHAR2(15) not null
        unique,
    AN_KEY     VARCHAR2(15),
    AN_KEY_DAP VARCHAR2(20)
)
/

INSERT INTO HR.MEMBER (NO, NAME, JUMIN, PASSWD, ID, AN_KEY, AN_KEY_DAP) VALUES (1001, '서유딩', '7510231234567', 'a1234', 'simson', '아내이름?', '김초딩');
INSERT INTO HR.MEMBER (NO, NAME, JUMIN, PASSWD, ID, AN_KEY, AN_KEY_DAP) VALUES (1002, '김초딩', '7509222345678', 'b1234', 'bobby', '남편이름?', '서유딩');
INSERT INTO HR.MEMBER (NO, NAME, JUMIN, PASSWD, ID, AN_KEY, AN_KEY_DAP) VALUES (1003, '서새알', '1410234567890', 'c1234', 'daddy', '아빠이름?', '서유딩');
INSERT INTO HR.MEMBER (NO, NAME, JUMIN, PASSWD, ID, AN_KEY, AN_KEY_DAP) VALUES (1004, '서공룡알', '1609223456789', 'd1234', 'mommy', '엄마이름?', '김초딩');