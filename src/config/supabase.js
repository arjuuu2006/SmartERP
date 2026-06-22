import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jskaqgzaihefmidmdczx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impza2FxZ3phaWhlZm1pZG1kY3p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMzIxNjAsImV4cCI6MjA5NzcwODE2MH0.qKApye0aFiR-MALsF1rsvsf_KtBglgituvzj8kk_YvI';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);