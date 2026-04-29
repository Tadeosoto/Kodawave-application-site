create extension if not exists "pgcrypto";

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'site-footer',
  status text not null default 'active' check (status in ('active', 'unsubscribed')),
  subscribed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists subscribers_status_idx on public.subscribers(status);
create index if not exists subscribers_subscribed_at_idx on public.subscribers(subscribed_at desc);

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists subscribers_touch_updated_at on public.subscribers;
create trigger subscribers_touch_updated_at
before update on public.subscribers
for each row execute function public.touch_updated_at();

alter table public.subscribers enable row level security;

-- Client app should not write directly.
drop policy if exists "No direct writes from anon" on public.subscribers;
create policy "No direct writes from anon"
on public.subscribers
for all
using (false)
with check (false);
