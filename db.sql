--
-- PostgreSQL database dump
--

\restrict aaKtsAOoBzW8jlndoiFkTn3uBeYvhw3cH8h0q9ncMD5Bf3I0NsOObPvC8bBaK0S

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: generate_enseignant_id(); Type: FUNCTION; Schema: public; Owner: db_user
--

CREATE FUNCTION public.generate_enseignant_id() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
   NEW.idEnseignant := 'ENS-' || LPAD(nextval('enseignant_seq')::TEXT, 6, '0');
   RETURN NEW;
END;
$$;


ALTER FUNCTION public.generate_enseignant_id() OWNER TO db_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: enseignant; Type: TABLE; Schema: public; Owner: db_user
--

CREATE TABLE public.enseignant (
    idenseignant character varying(10) NOT NULL,
    nom character varying(50) NOT NULL,
    nbheures integer NOT NULL,
    tauxhoraire numeric(10,2) NOT NULL,
    CONSTRAINT enseignant_nbheures_check CHECK ((nbheures >= 0)),
    CONSTRAINT enseignant_tauxhoraire_check CHECK ((tauxhoraire >= (0)::numeric))
);


ALTER TABLE public.enseignant OWNER TO db_user;

--
-- Name: enseignant_seq; Type: SEQUENCE; Schema: public; Owner: db_user
--

CREATE SEQUENCE public.enseignant_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.enseignant_seq OWNER TO db_user;

--
-- Data for Name: enseignant; Type: TABLE DATA; Schema: public; Owner: db_user
--

COPY public.enseignant (idenseignant, nom, nbheures, tauxhoraire) FROM stdin;
ENS-000001	Rakoto	40	15000.00
\.


--
-- Name: enseignant_seq; Type: SEQUENCE SET; Schema: public; Owner: db_user
--

SELECT pg_catalog.setval('public.enseignant_seq', 1, true);


--
-- Name: enseignant enseignant_pkey; Type: CONSTRAINT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.enseignant
    ADD CONSTRAINT enseignant_pkey PRIMARY KEY (idenseignant);


--
-- Name: enseignant trd_generate_id; Type: TRIGGER; Schema: public; Owner: db_user
--

CREATE TRIGGER trd_generate_id BEFORE INSERT ON public.enseignant FOR EACH ROW EXECUTE FUNCTION public.generate_enseignant_id();


--
-- PostgreSQL database dump complete
--

\unrestrict aaKtsAOoBzW8jlndoiFkTn3uBeYvhw3cH8h0q9ncMD5Bf3I0NsOObPvC8bBaK0S

