FROM denoland/deno:alpine

USER deno
WORKDIR /app

COPY --chown=deno:deno . .

ENV DENO_DEPLOYMENT="docker"

RUN ["deno", "install"]

CMD ["./start.sh"]
