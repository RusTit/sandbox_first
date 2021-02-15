use log::info;
use sandbox_first::Car;
use simple_logger::SimpleLogger;

fn main() {
    SimpleLogger::new().init().unwrap();
    let my_car = Car {
        speed: 1,
        name: String::from("Tiida"),
    };
    info!("Hello, world! from {}", my_car.name);
}
