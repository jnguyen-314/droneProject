import * as React from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import {useCallback, useState} from "react";

export default function App() {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <View>
            <YoutubePlayer
                height={300}
                play={playing}
                videoId={"7s5TYFPP6Uw"}
                onChangeState={onStateChange}
            />
            <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        </View>
    );
}