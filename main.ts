radio.onReceivedNumber(function (receivedNumber) {
    dataStreamer.writeNumberArray([receivedNumber, radio.receivedPacket(RadioPacketProperty.SignalStrength)])
})
dataStreamer.setBaudRate(BaudRate.BaudRate115200)
radio.setGroup(1)
basic.forever(function () {
	
})
