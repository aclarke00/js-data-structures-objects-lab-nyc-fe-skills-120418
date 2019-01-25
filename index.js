const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const copyOfDriver = {...driver}
  copyOfDriver.key = value;
  return copyOfDriver;
}

