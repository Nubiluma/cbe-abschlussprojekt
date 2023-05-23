import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gdsahqrkxwphnasuggxb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkc2FocXJreHdwaG5hc3VnZ3hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5ODc0NzksImV4cCI6MTk5NzU2MzQ3OX0.8zo-P1-voAiAFKbO1nQyFO6LwV46AwjYDTHHywD6YAk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
