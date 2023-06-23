import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uuqsuutekvsbbxgidgpc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1cXN1dXRla3ZzYmJ4Z2lkZ3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0NjM3MDYsImV4cCI6MjAwMzAzOTcwNn0.AFv6mzqt6YuRLrTP9KXvSzsVn-3N2TrfjOIWo-gLNdA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
