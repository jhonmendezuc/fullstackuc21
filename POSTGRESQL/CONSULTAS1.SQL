/* listar tareas y saber en nombre del usuario que las cre'o */

SELECT T.NAME, U.NAME
FROM TASKS AS T
    INNER JOIN USERS AS U ON T.ID_USUARIO = U.ID_USUARIO;

/*mostrar los usuarios y sus tareas. aunque no tengan ninguna*/
SELECT T.NAME, U.NAME
FROM USERS AS U
    LEFT JOIN TASKS AS T ON T.ID_USUARIO = U.ID_USUARIO;

/*USUARIOS QUE NO HAN CREADO TAREAS*/
SELECT T.NAME, U.NAME
FROM USERS AS U
    LEFT JOIN TASKS AS T ON T.ID_USUARIO = U.ID_USUARIO
WHERE
    t.name is null;

/*mostrar todas las tareas aunque no tengan comentarios*/
SELECT T.NAME, C.COMMENT
FROM TASKS AS T
    LEFT JOIN COMMENTS C ON C.ID_TASK = T.ID_TASK

/*mostrar todas las tareas que no tengan comentarios*/
SELECT T.NAME, C.COMMENT
FROM TASKS AS T
    RIGHT JOIN COMMENTS C ON C.ID_TASK = T.ID_TASK
WHERE
    C.COMMENT IS NULL

/*ACTUALIZACIONES UPDATE*/

SELECT * FROM TASKS WHERE NAME LIKE 'A%'

SELECT * FROM USERS WHERE EMAIL LIKE '%@gmail.com'

SELECT * FROM USERS WHERE email ~* '^(a|l)';

UPDATE USERS SET name = UPPER(name) WHERE email ~ '^a|j';