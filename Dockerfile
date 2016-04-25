FROM octohost/nginx:1.8

COPY ./ /srv/www

EXPOSE 80

CMD nginx