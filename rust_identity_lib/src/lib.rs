#[no_mangle]
pub extern "C" fn rust_add(left: i32, right: i32) -> i32 {
    left + right
}

