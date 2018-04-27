DROP TABLE IF EXISTS brands CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS users CASCADE;
\! pwd
\i 'db/migrations/migration-brands.sql'
\i 'db/migrations/migration-users.sql'
\i 'db/migrations/migration-products.sql'
\i 'db/migrations/migration-reviews.sql'

\i 'db/seeds/seed-brands.sql'
\i 'db/seeds/seed-users.sql'
\i 'db/seeds/seed-products.sql'
\i 'db/seeds/seed-reviews.sql'
