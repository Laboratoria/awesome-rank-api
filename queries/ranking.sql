CREATE TABLE IF NOT EXISTS
  tech_points ( INDEX(id) )
AS (
  select d.id, AVG(r.points) as 'avgtech'
  from developers d
  inner join rankings r on r.developerId = d.id
  inner join questions q on r.questionId = q.id
  where q.type = 'tech' and r.points > 0
  group by 1
);

CREATE TABLE IF NOT EXISTS
  soft_skill_points ( INDEX(id) )
AS (
  select d.id, AVG(r.points) as 'avghse'
  from developers d
  inner join rankings r on r.developerId = d.id
  inner join questions q on r.questionId = q.id
  where q.type REGEXP 'hse' and r.points > 0
  group by 1
);

select distinct d.name, d.lastname, d.age, d.campusId, d.photoUrl,
d.title, s.name as 'squad', d.ranking, tp.avgtech, tss.avghse
from developers d
inner join squads s on d.squadId = s.id
inner join tech_points tp on tp.id = d.id
inner join soft_skill_points tss on tss.id = d.id
where d.campusId = ?
group by d.name, d.lastname, d.age, d.campusId, d.photoUrl,
d.title, s.name, d.ranking, tp.avgtech, tss.avghse
order by (tp.avgtech + tss.avghse) desc;

DROP TABLE tech_points;
DROP TABLE soft_skill_points;
