Write blogs to `/blog-md`.

Once done, run:
```shell
./build.sh
```

```
fswatch -o blog-md templates | xargs -n1 ./build.sh & live-server
```