create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  password_hash text not null,
  created_at timestamptz not null default now()
);

create table if not exists molecules (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  smiles text not null,
  task text not null,
  result jsonb not null,
  created_at timestamptz not null default now()
);

create table if not exists predictions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  molecule_id uuid references molecules(id) on delete set null,
  task text not null,
  metrics jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_molecules_user on molecules(user_id);
create index if not exists idx_predictions_user on predictions(user_id);
