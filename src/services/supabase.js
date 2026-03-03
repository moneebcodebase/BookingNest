import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fikocwhcytcgjahzkova.supabase.co";
const supabaseKey = "sb_publishable_2oQCG-DHXB21ng8uRP0MGw_xGdAPTZC";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
