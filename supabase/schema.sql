-- Crib: the database, created once in Part A before Week 7.
-- Run this once in Supabase: SQL Editor > New query > paste everything > Run.

-- 1. The properties table: one row per home.
create table public.properties (
  id bigint generated always as identity primary key,
  title text not null,
  city text not null,
  price bigint not null check (price > 0),
  bedrooms int not null,
  bathrooms int not null,
  area int not null,
  description text,
  image_url text,
  created_at timestamptz not null default now()
);

-- 2. Row Level Security: nobody can read the table until a policy allows it.
alter table public.properties enable row level security;

create policy "Signed-in users can read properties"
  on public.properties for select
  to authenticated
  using (true);

-- 3. The favourites table: one row for each home a user has saved.
create table public.favourites (
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  property_id bigint not null references public.properties (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, property_id)
);

alter table public.favourites enable row level security;

create policy "Users can read their own favourites"
  on public.favourites for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Users can add their own favourites"
  on public.favourites for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can remove their own favourites"
  on public.favourites for delete
  to authenticated
  using (auth.uid() = user_id);

-- 4. Sample homes, so the list has something to show.
insert into public.properties (
  title,
  city,
  price,
  bedrooms,
  bathrooms,
  area,
  description,
  image_url
)
values
  (
    'Sea View Apartment',
    'Karachi',
    8500000,
    2,
    2,
    1100,
    'A bright apartment near Sea View with a balcony facing the beach.',
    'https://picsum.photos/seed/crib-1/800/500'
  ),
  (
    'Garden Villa',
    'Lahore',
    25000000,
    5,
    4,
    3600,
    'A family villa with a large lawn, close to schools and markets.',
    'https://picsum.photos/seed/crib-2/800/500'
  ),
  (
    'City Studio',
    'Islamabad',
    4200000,
    1,
    1,
    550,
    'A compact studio in a quiet sector, ideal for students.',
    'https://picsum.photos/seed/crib-3/800/500'
  ),
  (
    'Gulshan Family Home',
    'Karachi',
    18000000,
    4,
    3,
    2400,
    'A spacious house in Gulshan-e-Iqbal with parking for two cars.',
    'https://picsum.photos/seed/crib-4/800/500'
  ),
  (
    'Model Town Flat',
    'Lahore',
    6500000,
    2,
    1,
    900,
    'A ground-floor flat in Model Town, walking distance from the park.',
    'https://picsum.photos/seed/crib-5/800/500'
  ),
  (
    'Margalla Hills Cottage',
    'Islamabad',
    32000000,
    3,
    3,
    2800,
    'A quiet cottage with a view of the Margalla Hills.',
    'https://picsum.photos/seed/crib-6/800/500'
  ),
  (
    'Clifton Penthouse',
    'Karachi',
    42000000,
    4,
    4,
    3200,
    'A top-floor penthouse in Clifton with a private terrace.',
    'https://picsum.photos/seed/crib-7/800/500'
  ),
  (
    'Gulberg Studio',
    'Lahore',
    4800000,
    1,
    1,
    600,
    'A furnished studio in Gulberg, ideal for a single professional.',
    'https://picsum.photos/seed/crib-8/800/500'
  ),
  (
    'F-11 Apartment',
    'Islamabad',
    12500000,
    3,
    2,
    1500,
    'A corner apartment near F-11 Markaz with plenty of daylight.',
    'https://picsum.photos/seed/crib-9/800/500'
  ),
  (
    'DHA Townhouse',
    'Karachi',
    26000000,
    3,
    3,
    2000,
    'A modern townhouse in DHA, close to the commercial area.',
    'https://picsum.photos/seed/crib-10/800/500'
  ),
  (
    'Johar Town House',
    'Lahore',
    14000000,
    3,
    3,
    1800,
    'A double-storey house near Expo Centre with a small lawn.',
    'https://picsum.photos/seed/crib-11/800/500'
  ),
  (
    'E-7 Family House',
    'Islamabad',
    55000000,
    6,
    5,
    5000,
    'A large family house on a tree-lined street in E-7.',
    'https://picsum.photos/seed/crib-12/800/500'
  ),
  (
    'Bahadurabad Flat',
    'Karachi',
    6200000,
    2,
    1,
    850,
    'A compact flat on a quiet street, near shops and schools.',
    'https://picsum.photos/seed/crib-13/800/500'
  ),
  (
    'Bahria Town Villa',
    'Lahore',
    32000000,
    5,
    5,
    4000,
    'A large villa in Bahria Town with a rooftop terrace.',
    'https://picsum.photos/seed/crib-14/800/500'
  ),
  (
    'G-13 Flat',
    'Islamabad',
    5600000,
    2,
    2,
    950,
    'An affordable flat in G-13, close to the Kashmir Highway.',
    'https://picsum.photos/seed/crib-15/800/500'
  ),
  (
    'Malir Bungalow',
    'Karachi',
    15500000,
    5,
    4,
    3000,
    'An older bungalow with a large garden and a guest room.',
    'https://picsum.photos/seed/crib-16/800/500'
  ),
  (
    'Cantt Apartment',
    'Lahore',
    9800000,
    3,
    2,
    1300,
    'A secure apartment in Cantt with a lift and backup power.',
    'https://picsum.photos/seed/crib-17/800/500'
  ),
  (
    'Bahria Enclave Villa',
    'Islamabad',
    28000000,
    4,
    4,
    3400,
    'A new villa in Bahria Enclave with views of the hills.',
    'https://picsum.photos/seed/crib-18/800/500'
  );

grant select on public.properties to authenticated;
grant select, insert, delete on public.favourites to authenticated;