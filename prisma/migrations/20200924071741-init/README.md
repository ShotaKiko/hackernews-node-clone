# Migration `20200924071741-init`

This migration has been generated by Shota Kiko at 9/24/2020, 2:17:41 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200924071741-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+// The data source
+datasource db {
+    provider = "sqlite"
+    url = "***"
+}
+
+//Prisma client Generator
+generator client {
+    provider= "prisma-client-js"
+}
+
+//Data Model
+model Link {
+    id              Int             @id @default(autoincrement())
+    createdAt       DateTime        @default(now())
+    description     String
+    url             String
+}
```


