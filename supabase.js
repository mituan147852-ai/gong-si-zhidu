import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://apyhtpvrhbnzhqidbgbm.supabase.co'
const supabaseKey = 'sb_publishable_eMO-rCpWvoL1pl1VZnnH7Q_sxFn7-Qi'

export const supabase = createClient(supabaseUrl, supabaseKey)
