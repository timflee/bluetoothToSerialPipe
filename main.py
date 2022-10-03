def on_received_number(receivedNumber):
    received()
    serial.write_number(receivedNumber)
radio.on_received_number(on_received_number)

def received():
    music.play_tone(262, music.beat(BeatFraction.SIXTEENTH))

def on_received_string(receivedString):
    received()
    serial.write_line(receivedString)
radio.on_received_string(on_received_string)

def on_received_value(name, value):
    received()
    serial.write_value(name, value)
radio.on_received_value(on_received_value)

def on_data_received():
    radio.send_string("")
serial.on_data_received(serial.delimiters(Delimiters.NEW_LINE), on_data_received)

radio.set_group(1)
basic.show_number(1)
music.set_volume(25)
received()

def on_forever():
    pass
basic.forever(on_forever)
