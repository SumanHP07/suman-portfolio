-- Run this in your Supabase SQL Editor

create table if not exists visits (
  id            bigserial primary key,
  visitor_id    text,
  ip_address    text,
  city          text,
  region        text,
  country       text,
  org           text,
  device_type   text,
  browser       text,
  os            text,
  referrer      text,
  page          text default '/',
  created_at    timestamptz default now()
);

-- Index for fast queries
create index if not exists visits_created_at_idx on visits(created_at desc);
create index if not exists visits_visitor_id_idx on visits(visitor_id);

-- Disable RLS so service role can insert freely
alter table visits disable row level security;
