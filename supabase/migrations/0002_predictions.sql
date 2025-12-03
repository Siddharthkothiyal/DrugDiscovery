create table if not exists public.predictions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  molecule_id uuid references public.molecules(id) on delete set null,
  task text not null,
  metrics jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.predictions enable row level security;
create policy "insert_own_pred" on public.predictions for insert with check (auth.uid() = user_id);
create policy "select_own_pred" on public.predictions for select using (auth.uid() = user_id);
