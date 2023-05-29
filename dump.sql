--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    userid integer NOT NULL,
    postid integer NOT NULL,
    comment text NOT NULL,
    createdat timestamp without time zone DEFAULT now()
);


--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: follows; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.follows (
    id integer NOT NULL,
    userid integer NOT NULL,
    followid integer NOT NULL
);


--
-- Name: follows_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.follows_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: follows_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.follows_id_seq OWNED BY public.follows.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.likes (
    id integer NOT NULL,
    userid integer,
    postid integer NOT NULL,
    createdat timestamp without time zone DEFAULT now()
);


--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying(50) NOT NULL,
    description text NOT NULL,
    photo text,
    userid integer,
    createdat timestamp without time zone DEFAULT now()
);


--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    username character varying(50) NOT NULL,
    password text NOT NULL,
    biography text,
    createdat timestamp without time zone DEFAULT now(),
    photo text
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: follows id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.follows ALTER COLUMN id SET DEFAULT nextval('public.follows_id_seq'::regclass);


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.comments VALUES (3, 14, 18, 'testando', '2023-05-28 21:40:23.175884');
INSERT INTO public.comments VALUES (4, 14, 18, 'testandsdasdasdasdasdasdo', '2023-05-28 21:40:58.129982');
INSERT INTO public.comments VALUES (5, 14, 18, 'testandsdasdasdasdasdasdo', '2023-05-28 21:40:58.71002');
INSERT INTO public.comments VALUES (6, 14, 18, 'testandsdasdasdasdasdasdo', '2023-05-28 21:40:59.247687');
INSERT INTO public.comments VALUES (8, 14, 18, 'ultimo serão os primeiros', '2023-05-28 21:50:55.194828');
INSERT INTO public.comments VALUES (9, 14, 18, 'asas', '2023-05-28 21:56:31.357679');
INSERT INTO public.comments VALUES (10, 14, 18, 'testando velocidade', '2023-05-28 22:13:22.678779');
INSERT INTO public.comments VALUES (11, 14, 18, 'testando funcionalidade', '2023-05-28 22:14:34.866945');
INSERT INTO public.comments VALUES (12, 14, 18, 'de novo testando funcionalidade', '2023-05-28 22:14:52.67104');
INSERT INTO public.comments VALUES (13, 14, 21, 'Ganhamos hein!!', '2023-05-29 09:45:56.60255');


--
-- Data for Name: follows; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.follows VALUES (26, 14, 17);
INSERT INTO public.follows VALUES (33, 18, 14);
INSERT INTO public.follows VALUES (34, 14, 18);
INSERT INTO public.follows VALUES (35, 14, 19);
INSERT INTO public.follows VALUES (36, 19, 14);


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.likes VALUES (12, 14, 16, '2023-05-28 20:06:31.120298');
INSERT INTO public.likes VALUES (16, 14, 17, '2023-05-28 20:08:49.02477');
INSERT INTO public.likes VALUES (21, 14, 18, '2023-05-28 22:15:04.584984');
INSERT INTO public.likes VALUES (22, 18, 18, '2023-05-29 08:26:10.914919');
INSERT INTO public.likes VALUES (23, 18, 17, '2023-05-29 08:34:06.756742');
INSERT INTO public.likes VALUES (24, 18, 16, '2023-05-29 08:34:10.641517');
INSERT INTO public.likes VALUES (25, 14, 20, '2023-05-29 09:42:44.016087');
INSERT INTO public.likes VALUES (26, 14, 21, '2023-05-29 09:45:44.737822');


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.posts VALUES (15, 'teste2', '123', 'https://static.vecteezy.com/ti/vetor-gratis/p3/7559429-wolf-a-wolf-logo-ilustracao-em-estilo-moderno-gratis-vetor.jpg', NULL, '2023-05-28 14:08:39.201031');
INSERT INTO public.posts VALUES (16, 'Teste route', '123', 'https://static.vecteezy.com/ti/vetor-gratis/p3/7559429-wolf-a-wolf-logo-ilustracao-em-estilo-moderno-gratis-vetor.jpg', 14, '2023-05-28 16:37:45.281141');
INSERT INTO public.posts VALUES (17, 'teste route 2', '1234', 'https://static.vecteezy.com/ti/vetor-gratis/p3/7559429-wolf-a-wolf-logo-ilustracao-em-estilo-moderno-gratis-vetor.jpg', 14, '2023-05-28 16:38:03.411998');
INSERT INTO public.posts VALUES (18, 'teste route 3', '12345', 'https://static.vecteezy.com/ti/vetor-gratis/p3/7559429-wolf-a-wolf-logo-ilustracao-em-estilo-moderno-gratis-vetor.jpg', 14, '2023-05-28 16:38:16.083687');
INSERT INTO public.posts VALUES (19, 'Testando', '123', 'https://marketplace.canva.com/EAFDhVIREt4/1/0/1600w/canva-cita%C3%A7%C3%A3o-frase-papel-kraft-instagram-post-NUyNV8GSovk.jpg', 18, '2023-05-29 09:05:45.26665');
INSERT INTO public.posts VALUES (20, 'TESTANDO DE NOVO ', 'mais um teste para terminar', 'https://marketplace.canva.com/EAFDhVIREt4/1/0/1600w/canva-cita%C3%A7%C3%A3o-frase-papel-kraft-instagram-post-NUyNV8GSovk.jpg', 18, '2023-05-29 09:06:17.486145');
INSERT INTO public.posts VALUES (21, 'vai corinthians', 'corinthians', 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/09/Not%C3%ADcias-do-Corinthians-300x221.jpg', 19, '2023-05-29 09:45:24.568222');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (14, 'Gabriel', 'gabrielvictor933@usp.br', 'Gabriel', '$2b$10$rcxZCpgiJ0XxoJnv47xe8OfR3ZKSdCDIYnhW633lQ2td8kAvW2hTC', 'it is what it is!!!', '2023-05-28 14:24:51.128854', '');
INSERT INTO public.users VALUES (15, 'henrique', 'henrique@gmail.com', 'henrique', '$2b$10$ngRk4lM1xOeFtquP4kbymeA7Qe70JiHjYE3NW7fOqQHMsVWtUmE5C', '1', '2023-05-28 14:35:34.454667', '');
INSERT INTO public.users VALUES (16, 'Pedro', 'pedro@gmail.com', 'pedro', '$2b$10$QfWgTW04Y2RQRhHLAsYoh.lvDzr2CSugwIBj0zhXwPsVt9p4zPP7u', '12', '2023-05-28 14:36:04.37949', '');
INSERT INTO public.users VALUES (17, 'Lucas', 'lucas@gmail.com', 'Lucas', '$2b$10$6dzr5WOk7bE2JY22Ae67.OiyQJuCEN4e/lKKwIPmx2NoEKe/aFiqm', '123', '2023-05-28 14:36:31.626444', '');
INSERT INTO public.users VALUES (18, 'Victor ', 'victor@gmail.com', 'Victor', '$2b$10$FaaxiZZQgYVDWOC6lmuz3.o.gMS.GpycrZOps54Sac7pc9TqUnrne', 'it is what it is!!!', '2023-05-29 08:25:15.816054', 'https://static.vecteezy.com/ti/vetor-gratis/p3/7559429-wolf-a-wolf-logo-ilustracao-em-estilo-moderno-gratis-vetor.jpg');
INSERT INTO public.users VALUES (19, 'Luis', 'victor123@gmail.com', 'Luis', '$2b$10$4Yrsvk5FXSbivqyRW2TmB.2WtNkDQ.bRV7fkXCEvpW0tl3Ilhv9Dm', 'Vai corinthians', '2023-05-29 09:45:01.991251', 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/09/Not%C3%ADcias-do-Corinthians-300x221.jpg');
INSERT INTO public.users VALUES (20, 'sdadsdas', 'dasdasda@gmail.com', 'Gabriel123123', '$2b$10$UCLJR0Ky7ZSV9oDc5HPLEeAoB7C7UWHBPF7/pJLyKHMHx/uX9lShq', 'it is what it is!!!', '2023-05-29 10:22:06.226599', 'https://static.vecteezy.com/ti/vetor-gratis/p3/7559429-wolf-a-wolf-logo-ilustracao-em-estilo-moderno-gratis-vetor.jpg');


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.comments_id_seq', 13, true);


--
-- Name: follows_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.follows_id_seq', 36, true);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.likes_id_seq', 26, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.posts_id_seq', 21, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 20, true);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: follows follows_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.follows
    ADD CONSTRAINT follows_pkey PRIMARY KEY (id);


--
-- Name: follows follows_userid_followid_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.follows
    ADD CONSTRAINT follows_userid_followid_key UNIQUE (userid, followid);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: likes unique_user_post_combination; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT unique_user_post_combination UNIQUE (userid, postid);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: comments comments_fk_users; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_fk_users FOREIGN KEY (userid) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- Name: comments comments_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- Name: follows follows_fk_users; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.follows
    ADD CONSTRAINT follows_fk_users FOREIGN KEY (userid) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: follows follows_followid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.follows
    ADD CONSTRAINT follows_followid_fkey FOREIGN KEY (followid) REFERENCES public.users(id);


--
-- Name: follows followsid_fk_users; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.follows
    ADD CONSTRAINT followsid_fk_users FOREIGN KEY (followid) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: likes likes_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- Name: comments post_fk_users; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT post_fk_users FOREIGN KEY (postid) REFERENCES public.posts(id) ON DELETE CASCADE;


--
-- Name: likes postlikeid_fk_users; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT postlikeid_fk_users FOREIGN KEY (postid) REFERENCES public.posts(id) ON DELETE CASCADE;


--
-- Name: posts posts_fk_users; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_fk_users FOREIGN KEY (userid) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

