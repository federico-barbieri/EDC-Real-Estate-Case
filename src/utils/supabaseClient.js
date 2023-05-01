import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://bztddrjflrbqomxudxxk.supabase.co'

 const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dGRkcmpmbHJicW9teHVkeHhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MTkyNTksImV4cCI6MTk5NTQ5NTI1OX0.z1TnF1m2lre8YZBsyluBgzEc7Zq4DkJnzozLPHS65D4"

// const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;