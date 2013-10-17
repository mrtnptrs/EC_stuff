# Hours, minutes and seconds to seconds

def to_secs(hours, minutes, seconds):
    seconds = int((hours*3600) + (minutes*60) + seconds)
    print(seconds)
    return seconds
