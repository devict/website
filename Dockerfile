FROM denoland/deno:alpine

USER deno
WORKDIR /app

COPY --chown=deno:deno . .

ENV DENO_DEPLOYMENT="docker"

RUN ["deno", "install"]

EXPOSE 8000

CMD ["./start.sh"]
