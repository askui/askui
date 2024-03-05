---
displayed_sidebar: apiSidebar
---
# pressAndroidTwoKey
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Press two Android keys like `volume_down`+`power`.

<details>
<summary>Available keys</summary>
<code>home</code>, <code>back</code>, <code>call</code>, <code>endcall</code>, <code>star</code>, <code>pound</code>, <code>dpad_up</code>, <code>dpad_down</code>, <code>dpad_left</code>, <code>dpad_right</code>, <code>dpad_center</code>, <code>volume_up</code>, <code>volume_down</code>, <code>power</code>, <code>camera</code>, <code>clear</code>, <code>comma</code>, <code>period</code>, <code>alt_left</code>, <code>alt_right</code>, <code>shift_left</code>, <code>shift_right</code>, <code>tab</code>, <code>space</code>, <code>sym</code>, <code>explorer</code>, <code>envelope</code>, <code>enter</code>, <code>del</code>, <code>grave</code>, <code>minus</code>, <code>equals</code>, <code>left_bracket</code>, <code>right_bracket</code>, <code>backslash</code>, <code>semicolon</code>, <code>apostrophe</code>, <code>slash</code>, <code>at</code>, <code>num</code>, <code>headsethook</code>, <code>focus</code>, <code>plus</code>, <code>menu</code>, <code>notification</code>, <code>search</code>, <code>media_play_pause</code>, <code>media_stop</code>, <code>media_next</code>, <code>media_previous</code>, <code>media_rewind</code>, <code>media_fast_forward</code>, <code>mute</code>, <code>page_up</code>, <code>page_down</code>, <code>switch_charset</code>, <code>escape</code>, <code>forward_del</code>, <code>ctrl_left</code>, <code>ctrl_right</code>, <code>caps_lock</code>, <code>scroll_lock</code>, <code>function</code>, <code>break</code>, <code>move_home</code>, <code>move_end</code>, <code>insert</code>, <code>forward</code>, <code>media_play</code>, <code>media_pause</code>, <code>media_close</code>, <code>media_eject</code>, <code>media_record</code>, <code>f1</code>, <code>f2</code>, <code>f3</code>, <code>f4</code>, <code>f5</code>, <code>f6</code>, <code>f7</code>, <code>f8</code>, <code>f9</code>, <code>f10</code>, <code>f11</code>, <code>f12</code>, <code>num_lock</code>, <code>numpad_0</code>, <code>numpad_1</code>, <code>numpad_2</code>, <code>numpad_3</code>, <code>numpad_4</code>, <code>numpad_5</code>, <code>numpad_6</code>, <code>numpad_7</code>, <code>numpad_8</code>, <code>numpad_9</code>, <code>numpad_divide</code>, <code>numpad_multiply</code>, <code>numpad_subtract</code>, <code>numpad_add</code>, <code>numpad_dot</code>, <code>numpad_comma</code>, <code>numpad_enter</code>, <code>numpad_equals</code>, <code>numpad_left_paren</code>, <code>numpad_right_paren</code>, <code>volume_mute</code>, <code>info</code>, <code>channel_up</code>, <code>channel_down</code>, <code>zoom_in</code>, <code>zoom_out</code>, <code>window</code>, <code>guide</code>, <code>bookmark</code>, <code>captions</code>, <code>settings</code>, <code>app_switch</code>, <code>language_switch</code>, <code>contacts</code>, <code>calendar</code>, <code>music</code>, <code>calculator</code>, <code>assist</code>, <code>brightness_down</code>, <code>brightness_up</code>, <code>media_audio_track</code>, <code>sleep</code>, <code>wakeup</code>, <code>pairing</code>, <code>media_top_menu</code>, <code>last_channel</code>, <code>tv_data_service</code>, <code>voice_assist</code>, <code>help</code>, <code>navigate_previous</code>, <code>navigate_next</code>, <code>navigate_in</code>, <code>navigate_out</code>, <code>dpad_up_left</code>, <code>dpad_down_left</code>, <code>dpad_up_right</code>, <code>dpad_down_right</code>, <code>media_skip_forward</code>, <code>media_skip_backward</code>, <code>media_step_forward</code>, <code>media_step_backward</code>, <code>soft_sleep</code>, <code>cut</code>, <code>copy</code>, <code>paste</code>, <code>all_apps</code>, <code>refresh</code>, 

as well as the digits from 0 to 9 and English alphabets.
</details>


**Example:**
```typescript
await aui.pressAndroidTwoKey('volume_down', 'power').exec()
```

![](/img/gif/pressAndroidTwoKeys.gif)

   * @param \{ANDROID_KEY} first_key - An Android key
   * @param \{ANDROID_KEY} second_key - An Android key
