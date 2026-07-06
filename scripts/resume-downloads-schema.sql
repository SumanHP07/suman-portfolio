-- Run this in Supabase SQL Editor

create table if not exists resume_downloads (
  id            bigserial primary key,
  visitor_id    text,
  ip_address    text,
  city          text,
  region        text,
  country       text,
  org           text,
  device_type   text,
  browser       text,
  referrer      text,
  created_at    timestamptz default now()
);

create index if not exists resume_downloads_created_at_idx on resume_downloads(created_at desc);
create index if not exists resume_downloads_visitor_id_idx on resume_downloads(visitor_id);

alter table resume_downloads disable row level security;
