const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const copyOfDriver = {...driver}
  copyOfDriver[key] = value;
  return copyOfDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.name = Sam
  driver.address = 12 Broadway
}
